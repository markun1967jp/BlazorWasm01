// In development, always fetch from the network and do not enable offline support.
// This is because caching would make development more difficult (changes would not
// be reflected on the first load after each change).
// �o�[�W�����A�b�v�̎��́A����������������B
// Service Worker Version 1.0.9
self.addEventListener('fetch', () => { });
