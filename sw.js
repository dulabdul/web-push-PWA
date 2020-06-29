self.addEventListener('push', function (event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push Message No Payload';
    }
    var options = {
        body: body,
        icon: '/mikasa.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});