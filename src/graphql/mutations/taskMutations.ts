import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      status
      dueDate
      pointEstimate
      tags
      assignee {
        avatar
        id
      }
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      id
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      id
      name
      status
      dueDate
      pointEstimate
      tags
      assignee {
        avatar
        id
      }
    }
  }
`;

export const TASK_FRAGMENT = gql`
  fragment NewTask on Task {
    id
    name
    status
    pointEstimate
    dueDate
    tags
    assignee {
      id
    }
  }
`;
