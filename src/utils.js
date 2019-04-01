const SPOTIFY_SECRET =
  'BQCzy6tYHeYgtWLm9y1EerMr6QFxi3ZwXJnALoSA-skUPPTmRZ3FRdhqPncrveuhxl1bWATQvEybk5UQ1FJpj0On3RNHHNPyrArAPpLAeW1axqTH8lrc1-MCcXNPixiJfwS-4AHUQiet16hsYCDyWPxqBT6FxxUANFecyrvaGKinsx4D-I_py6sSBheueoKvBeGGxcSefIOPXCG0SwD5WM8';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${SPOTIFY_SECRET}`,
};

export const getAlbums = () => {
  return fetch(
    'https://api.spotify.com/v1/browse/new-releases?limit=10&country=GB',
    {
      headers,
    }
  );
};

export const getAlbumTracks = (id) => {
  return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
    headers,
  });
};
