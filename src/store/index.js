import React from "react";
import mockUserData from '../mockData/mockUserData';
import mockUserPosts from '../mockData/mockUserPosts';
export const StoreContext = React.createContext(
    {
        usersData: mockUserData, 
        usersPosts: mockUserPosts,
        currentUser: 0,
    });
StoreContext.displayName = 'instaMike store';

