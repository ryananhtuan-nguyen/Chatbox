import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { addMessage, getMessage } from '../apis/messages.js'

export function useMessages() {
  const query = useQuery(['messages'], getMessage)
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useCustomMutation() {
  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: (mess: string) => addMessage(mess),
    onSuccess: () => {
      queryClient.invalidateQueries(['messages'])
    },
  })

  return { addMutation }
}
