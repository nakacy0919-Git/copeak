/* Japeak learning shortcuts: stores lesson IDs only, never transcripts or audio. */
(function (root) {
    'use strict';
    const KEYS = Object.freeze({
        favorites: 'japeak:favorites:v1',
        recent: 'japeak:recent:v1'
    });
    const LIMITS = Object.freeze({ favorites: 80, recent: 12 });
    const fallback = { favorites: [], recent: [] };

    function cleanId(id) {
        return typeof id === 'string' && id.length > 0 && id.length <= 180
            && /^[a-zA-Z0-9_-]+$/.test(id);
    }
    function sanitize(value, limit) {
        if (!Array.isArray(value)) return [];
        return [...new Set(value.filter(cleanId))].slice(0, limit);
    }
    function read(type) {
        const key = KEYS[type];
        if (!key) return [];
        try {
            if (!root.localStorage) return fallback[type].slice();
            const data = root.localStorage.getItem(key);
            return data ? sanitize(JSON.parse(data), LIMITS[type]) : fallback[type].slice();
        } catch (error) {
            // Storage is unavailable in some private browsing / managed school devices.
            return fallback[type].slice();
        }
    }
    function write(type, ids) {
        const items = sanitize(ids, LIMITS[type]);
        fallback[type] = items;
        try {
            if (root.localStorage) root.localStorage.setItem(KEYS[type], JSON.stringify(items));
        } catch (error) {
            // Keep working for this tab even when persistent storage is blocked.
        }
        return items.slice();
    }
    function getFavorites() { return read('favorites'); }
    function getRecent() { return read('recent'); }
    function isFavorite(id) { return cleanId(id) && getFavorites().includes(id); }
    function toggleFavorite(id) {
        if (!cleanId(id)) return false;
        const favorites = getFavorites();
        const exists = favorites.includes(id);
        write('favorites', exists ? favorites.filter(x => x !== id) : [id, ...favorites]);
        return !exists;
    }
    function addRecent(id) {
        if (!cleanId(id)) return getRecent();
        return write('recent', [id, ...getRecent().filter(x => x !== id)]);
    }
    function clearRecent() { return write('recent', []); }

    const api = { getFavorites, getRecent, isFavorite, toggleFavorite, addRecent, clearRecent };
    root.JapeakLearningHistory = api;
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
