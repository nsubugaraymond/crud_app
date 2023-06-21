import React, { useEffect } from 'react';
import { Text, Button } from 'react-native';
import { useGetUsersQuery, useDeleteUserMutation } from '../reducers/userSlice';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const UserContainer = styled.View`
  margin-bottom: 16px;
  padding: 16px;
  background-color: #f1f1f1;
  border-radius: 8px;
`;

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const HomeScreen: React.FC = () => {
  const { data: users, isError, error } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  useEffect(() => {
    if (isError) {
      console.log('Error fetching users:', error);
    }
  }, [isError, error]);

  const handleDeleteUser = (id: number) => {
    deleteUser(id);
  };

  return (
    <Container>
      {users?.map((user) => (
        <UserContainer key={user.id}>
          <UserName>{user.name}</UserName>
          <Button title="Delete" onPress={() => handleDeleteUser(user.id)} />
        </UserContainer>
      ))}
    </Container>
  );
};

export default HomeScreen;
