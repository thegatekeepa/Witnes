import cron from "node-cron";
import expireSessions from "../modules/sessions/expiresession.service.js";

const startExpireSessionsJob = () => {
    cron.schedule("* * * * *", async () => {
        try {
            const result = await expireSessions();

            console.log(
                `[CRON] Expired ${result.expiredCount} session(s).`
            );
        } catch (error) {
            console.error(
                "[CRON] Failed to expire sessions:",
                error.message
            );
        }
    });
};

export default startExpireSessionsJob;
