const baseUrl = 'https://api.github.com/users';

export const getUserData = (userId) => {
  return fetch(`${baseUrl}/${userId}`).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Failed to fetch data');
  });
};
