import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import ListIcon from '@material-ui/icons/List';


function Header() {
    return (
          <div className='header'>
                <div className ='header1'>
                    <div className="header_option1">
                        <span>
                                <img className="header_logo" 
                                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                        
                        </span>
                        <span className="location_icon">
                            <RoomSharpIcon/>
                        </span>


                        <span>
                            <div className="Deliver_to">
                                <span
                                    className='header_optionLineOne'> Deliver To
                                </span>
                                
                                
                                <span className="header_optionLineTwo">
                                    Bangladesh
                                </span>
                            
                            </div>
                            
                        </span>
                        
                    </div>   
                        
                    <div className="header_search">
                        <input className="header_searchInput" type="text"/>
                        
                        <SearchIcon
                            className="header_searchIcon" />
                    
                    </div>

                    <div className="header_nav">

                        <div className="header_option">
                            <span 
                                className='header_optionLineOne'> Hello Guest!
                            </span>
                            <span 
                                className='header_optionLineTwo'> Sign In
                            </span>
                            
                        </div>   
                        
                        <div className="header_option">
                            <span 
                                className='header_optionLineOne'> Return
                            </span>
                            <span 
                                className='header_optionLineTwo'> & Orders
                            </span>
                        </div>   
                        
                        <div className="header_option">
                            <span 
                                className='header_optionLineOne'> Your
                            </span>
                            <span 
                                className='header_optionLineTwo'> Prime
                            </span>
                        </div>   

                        <div className="header_optionBasket header_optionBasket_count">
                            <span>
                            <AddShoppingCartSharpIcon/>0
                            </span>
                            
                        </div>
                        
                    </div>
                    
            
                </div>
                <div className="header2">
                    <div className="header2_list_icon">
                        <span>
                            <ListIcon/>
                        </span>
                        <span className="header2_list_icon_name">
                            All
                        </span>
                    
                        <div className="header2_menu_options">
                            <span className="header2_menu_optionLine">
                                Today's Deal
                            </span>
                            <span className="header2_menu_optionLine">
                                Customer Service
                            </span>
                            <span className="header2_menu_optionLine">
                                Gift Cards
                            </span>
                            <span className="header2_menu_optionLine">
                                Sell
                            </span>
                            <span className="header2_menu_optionLine">
                                Registry
                            </span>
                        </div>
                   

                    </div>
                        
                </div>

                



            </div>    
        

        );
}

export default Header;
