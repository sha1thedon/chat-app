import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap');

  body {
    font-family: 'Nunito', sans-serif;
    background-color: #fafafa;
    color: #262626;
  }

  a {
    color: #262626;
    text-decoration: none;
  }

  .header {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .profile-pic {
    border-radius: 50%;
  }

  .post {
    margin-bottom: 10px;
  }

  .post-image {
    width: 100%;
    border-radius: 5px;
  }

  .post-info {
    padding: 10px;
  }

  .post-comments {
    padding: 10px;
  }

  .comment {
    margin-bottom: 10px;
  }
`;

export default GlobalStyles;
