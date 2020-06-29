var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BFtLZnQtBAUGSK2Q5AHIjkBn6h5HxasvX54HrwMw49IQ3tTqvTUgemqsLaI0EIUdnp2IceFN3sj6s6ndr3EJ9n4",
    "privateKey": "RzaNN8wvLP17-ngNx6a8PAQYilCvpZ4onUgGqnsmaZo"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": " https://fcm.googleapis.com/fcm/send/f7PG96pc90M:APA91bEVMbFcr0k0VIL7dwHH8muAjkBO2sIiMeLoryDBx_bSRXWxRTMNHu3uKJP6Nkc9jd7HYw46DgNJArygaXGgYsLlHIjE_vqO2kgKklMtp2IltQrOxHWpabGnhUKyWL9XxD295VJ8",
    "keys": {
        "p256dh": "BOOnEEkY9GryVweNDABOIb9YbppKyKv48KofME+Gz6Hj6LZmsf8CpVofkjms+BJgjgtZLTUKuQq3gl2dtfuXgqM=",
        "auth": "Kwl3FIppL82wqtQpYo499A=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '911255981294',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options

);