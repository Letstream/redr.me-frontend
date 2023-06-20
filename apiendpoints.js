const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8127'

export default {
    link: `${API_BASE}/api/link/`,
    token_link: `${API_BASE}/api/edit/`,
    stats: `${API_BASE}/api/stats/`
}
