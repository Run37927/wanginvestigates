import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivityList() {
    const activities = [
        {
            id: 1,
            type: "new_member",
            user: { name: "SarahJ", avatar: "/users/user-1.png", initials: "SJ" },
            time: "2小时前",
            description: "成为高级会员",
        },
        {
            id: 2,
            type: "new_content",
            user: { name: "您", avatar: "/users/user-1.png", initials: "YO" },
            time: "4小时前",
            description: '发布了新文章："隐藏的真相"',
        },
        {
            id: 3,
            type: "payment",
            user: { name: "MikeC", avatar: "/users/user-2.png", initials: "MC" },
            time: "昨天",
            description: "续订了年度订阅 ($120)",
        },
        {
            id: 4,
            type: "comment",
            user: { name: "ElenaR", avatar: "/users/user-3.png", initials: "ER" },
            time: "昨天",
            description: "评论了您的最新视频",
        },
        {
            id: 5,
            type: "new_member",
            user: { name: "DavidK", avatar: "/users/user-1.png", initials: "DK" },
            time: "2天前",
            description: "成为标准会员",
        },
    ]

    return (
        <div className="space-y-4">
            {activities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4">
                    <Avatar>
                        <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                        <AvatarFallback>{activity.user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                            <span className="font-semibold">{activity.user.name}</span> {activity.description}
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

