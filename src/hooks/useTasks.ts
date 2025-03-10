import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; // Thay bằng API BE của bạn

export const useTasks = () => {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const { data } = await axios.get(API_URL);
            return data;
        },
    });
};

export const useAddTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (task: { title: string }) => {
            const { data } = await axios.post(API_URL, task);
            return data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
    });
};

export const useToggleTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            await axios.patch(`${API_URL}/${id}/toggle`);
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
    });
};

export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            await axios.delete(`${API_URL}/${id}`);
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
    });
};
