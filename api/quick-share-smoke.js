// Preview-only smoke test; deliberately excluded from the production commit.
module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false });
  const base = 'https://sxcbudhcxiblpdzpgfep.supabase.co/functions/v1/copeak-quick-share';
  try {
    const sample = {
      title: 'Quick Share smoke test',
      eng: 'Practice makes progress.',
      jpn: '練習は成長につながります。',
      lang: 'en-US', type: 'standard', dialogue: [], formUrl: ''
    };
    const created = await fetch(base, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: 'https://copeak.pic-speak-story.com' },
      body: JSON.stringify(sample),
      signal: AbortSignal.timeout(12000)
    });
    const payload = await created.json().catch(() => null);
    if (!created.ok || !payload?.id) {
      return res.status(200).json({
        ok: false, phase: 'create', postStatus: created.status, reason: payload?.reason || 'invalid_response'
      });
    }
    const fetched = await fetch(base + '/' + encodeURIComponent(payload.id), {
      signal: AbortSignal.timeout(12000)
    });
    const received = await fetched.json().catch(() => null);
    return res.status(200).json({
      ok: created.status === 201 && fetched.status === 200 &&
        received?.lesson?.eng === sample.eng,
      postStatus: created.status,
      fetchStatus: fetched.status,
      idMatchesShortFormat: /^s_[A-Za-z0-9_-]{11}$/.test(payload.id),
      contentMatches: received?.lesson?.eng === sample.eng,
      expiresAtPresent: Boolean(payload.expiresAt)
    });
  } catch (error) {
    return res.status(200).json({ ok: false, phase: 'network', reason: String(error?.name || 'unknown') });
  }
};