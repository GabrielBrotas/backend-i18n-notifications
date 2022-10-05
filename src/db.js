export const notification_types = {
    "LIKED_POST": "LIKED_POST",
}

export const db_notifications = {
    getAll: () => {
        return [
            {
                receiver: "Gabriel",
                sender: "John Doe",
                type: notification_types.LIKED_POST
            },
            {
                receiver: "Gabriel",
                sender: "Marvolo",
                type: notification_types.LIKED_POST
            }
        ]
    }
}
