export const notification_types = {
    "LIKED_POST": "LIKED_POST",
    "STARTED_FOLLOW": "STARTED_FOLLOW",
    "MESSAGE_RECEIVED": "MESSAGE_RECEIVED",
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
            },
            {
                receiver: "Gabriel",
                sender: "Ronald Wesley",
                type: notification_types.MESSAGE_RECEIVED
            },
            {
                receiver: "Gabriel",
                sender: "Hermione",
                type: notification_types.MESSAGE_RECEIVED
            },
            {
                receiver: "Gabriel",
                sender: "Hagrid",
                type: notification_types.STARTED_FOLLOW
            }
        ]
    }
}
