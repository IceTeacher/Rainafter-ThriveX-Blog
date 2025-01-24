"use client"

import { useConfigStore } from '@/stores'
import GitHubCalendar from "react-github-calendar"
import "./index.scss"

export default () => {
    const isDark = useConfigStore(state => state.isDark)

    return (
        <>
            <GitHubCalendar username="IceTeacher" colorScheme={isDark ? "dark" : "light"} hideTotalCount />
        </>
    )
}