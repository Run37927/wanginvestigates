"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { name: "Jan", members: 850 },
    { name: "Feb", members: 940 },
    { name: "Mar", members: 1020 },
    { name: "Apr", members: 1080 },
    { name: "May", members: 1150 },
    { name: "Jun", members: 1248 },
]

export function MemberGrowthChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="members" stroke="#FF4A4A" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    )
}

