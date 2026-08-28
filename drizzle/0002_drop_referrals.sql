DROP TABLE `referrals`;
--> statement-breakpoint
UPDATE `users` SET `role` = 'user' WHERE `role` = 'partner';
