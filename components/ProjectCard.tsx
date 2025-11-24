"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type content from '../data/content'

type Project = (typeof content)['projects'][number]

type ProjectCardProps = {
  project: Project
  positionClass: string
  restoreSignal: number
}

export default function ProjectCard({ project, positionClass, restoreSignal }: ProjectCardProps) {
  const router = useRouter()
  const [isMinimized, setIsMinimized] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    setIsMinimized(false)
    setIsHidden(false)
    setIsNavigating(false)
  }, [restoreSignal])

  if (isHidden) {
    return null
  }

  const handleMinimize = () => {
    setIsMinimized((prev) => !prev)
  }

  const handleClose = () => {
    setIsHidden(true)
  }

  const handleMaximize = () => {
    if (isNavigating) return
    setIsNavigating(true)
    setTimeout(() => {
      router.push(`/projects?highlight=${encodeURIComponent(project.title)}`)
      setIsNavigating(false)
    }, 500)
  }

  return (
    <div
      className={`project-card ${positionClass} ${isMinimized ? 'minimized' : ''}`}
      data-project={project.title}
      role="group"
      aria-label={project.title}
    >
      <div className="project-card-header">
        <div className="project-card-title">{project.title}</div>
        <div className="project-card-icons">
          <button
            type="button"
            className="project-card-icon minimize"
            aria-label={`Minimize ${project.title}`}
            onClick={handleMinimize}
          />
          <button
            type="button"
            className="project-card-icon maximize"
            aria-label={`Maximize ${project.title}`}
            onClick={handleMaximize}
            disabled={isNavigating}
          />
          <button
            type="button"
            className="project-card-icon close"
            aria-label={`Close ${project.title}`}
            onClick={handleClose}
          />
        </div>
      </div>
      <div className="project-card-tech">
        {project.tech.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-card-progress">
        <div className="progress-bar" style={{ width: `${project.progress}%` }} />
      </div>
    </div>
  )
}
