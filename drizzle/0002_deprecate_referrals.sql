-- The `referrals` table backed the removed real-estate referral feature and
-- is no longer read from or written to by the application (see
-- src/db/schema.ts). Per this project's zero-data-loss migration policy, it
-- is intentionally left in place rather than dropped here; a future,
-- separate migration may drop it once it's confirmed safe to do so.
UPDATE `users` SET `role` = 'user' WHERE `role` = 'partner';
