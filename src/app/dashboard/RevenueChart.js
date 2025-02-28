"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { name: "Jan", revenue: 5400 },
    { name: "Feb", revenue: 6200 },
    { name: "Mar", revenue: 7100 },
    { name: "Apr", revenue: 7800 },
    { name: "May", revenue: 8500 },
    { name: "Jun", revenue: 8942 },
]

export function RevenueChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
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
                <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                <Bar dataKey="revenue" fill="#FF6F3C" />
            </BarChart>
        </ResponsiveContainer>
    )
}

