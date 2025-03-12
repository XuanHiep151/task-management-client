"use client";
interface TaskDetailPageProps {
    params: { id: string };  // Lấy param ID từ URL
  }
  
  export default function TaskDetailPage({ params }: TaskDetailPageProps) {
    return <h1>Task Detail for {params.id}</h1>;
  }
  