import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle1 = {
    id: 'ta1',
    headline: 'First Test Article',
    author: 'Auth 1',
    createdOn: '2021-11-21',
    summary: 'Test Article With a Given Author',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const testArticle2 = {
    id: 'ta2',
    headline: 'Second Test Article',
    author: '',
    createdOn: '2021-11-24',
    summary: 'Test Article With No Given Author',
    body: "Elementum integer enim neque volutpat ac. Lorem donec massa sapien faucibus et. Viverra accumsan in nisl nisi. In hendrerit gravida rutrum quisque non tellus orci ac. Mollis aliquam ut porttitor leo a diam sollicitudin. Diam phasellus vestibulum lorem sed risus ultricies tristique. Morbi tristique senectus et netus et malesuada. Non pulvinar neque laoreet suspendisse interdum consectetur. Non curabitur gravida arcu ac tortor dignissim. Varius morbi enim nunc faucibus a pellentesque sit. Auctor urna nunc id cursus metus aliquam eleifend. Quis varius quam quisque id diam vel. Eget duis at tellus at. Ac tortor dignissim convallis aenean et tortor at. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Netus et malesuada fames ac turpis egestas sed. Ut tortor pretium viverra suspendisse potenti."
};

test('renders component without errors', ()=> {
    render(<Article />);
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.