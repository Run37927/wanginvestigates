"use client"

import { useState } from "react"
import { AppShell } from "./AppShell"
import { MembersList } from "./MembersList"
import { PaymentsView } from "./PaymentsView"
import { SettingsView } from "./SettingsView"
import { ContentEditor } from "./ContentEditor"
import { DashboardOverview } from "./DashboardOverview"
import { ContentManagement } from "./ContentManagement"

export default function DashboardPage() {
    const [currentView, setCurrentView] = useState("dashboard")
    const [editingContent, setEditingContent] = useState(false)
    const [selectedContent, setSelectedContent] = useState(null)

    const handleCreateContent = () => {
        setSelectedContent(null)
        setEditingContent(true)
        setCurrentView("content")
    }

    const handleEditContent = (content) => {
        setSelectedContent(content)
        setEditingContent(true)
    }

    const handleCloseEditor = () => {
        setEditingContent(false)
    }

    return (
        <AppShell currentView={currentView} onNavigate={setCurrentView} onCreateContent={handleCreateContent}>
            {currentView === "dashboard" && <DashboardOverview />}
            {currentView === "content" && !editingContent && (
                <ContentManagement onEditContent={handleEditContent} onCreateContent={handleCreateContent} />
            )}
            {currentView === "content" && editingContent && (
                <ContentEditor content={selectedContent} onClose={handleCloseEditor} />
            )}
            {currentView === "members" && <MembersList />}
            {currentView === "payments" && <PaymentsView />}
            {currentView === "settings" && <SettingsView />}
        </AppShell>
    )
}

