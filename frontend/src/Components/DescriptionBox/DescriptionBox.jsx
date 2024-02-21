import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nisi dignissimos ipsa provident pariatur, cumque fuga sunt. Aliquid eos velit fugit, est exercitationem quod tempore illo, distinctio assumenda iusto odit dolorum facere ipsam optio magni blanditiis cupiditate porro repudiandae consequatur animi dolor voluptatem architecto! Aspernatur corporis blanditiis ut quibusdam sint.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas voluptatibus accusantium voluptas est. Illum voluptate repudiandae non libero deserunt molestiae temporibus saepe deleniti architecto, omnis cupiditate culpa, molestias est.</p>
            </div>
        </div>
    )
}

export default DescriptionBox