import React from "react";
import './filter.css'

export const NavFilter = () => {
    return (
        <div className="container-filters">
            <a href="##">
                Favorites task <ion-icon name="heart-circle-sharp"></ion-icon>
            </a>
            <a href="##">
                Task completed <ion-icon name="checkmark-sharp"></ion-icon>
            </a>
            <a href="##">
                Task in progress <ion-icon name="trending-up-sharp"></ion-icon>
            </a>
        </div>
    )
}