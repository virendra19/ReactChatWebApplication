import React from "react";
import '../pages/css files/chatpage.css'
import { MdAttachFile } from "react-icons/md";
const profile_pic = "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
const post_pic = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"


function Home(props) {
  const allChatUser = [
    {
      userName: "Jani Patel",
    },
    {
      userName: "Rekha wicckt",
    },
    {
      userName: "Rani Roy",
    },
    {
      userName: "Ashwin mukhrji",
    },
    {
      userName: "Prit jaishwal",
    },
    {
      userName: "Jani Patel",
    },
    {
      userName: "Rekha wicckt",
    },
    {
      userName: "Rani Roy",
    },
    {
      userName: "Ashwin mukhrji",
    },
    {
      userName: "Prit jaishwal",
    },
    {
      userName: "Rekha wicckt",
    },
    {
      userName: "Rani Roy",
    },
    {
      userName: "Ashwin mukhrji",
    },
    {
      userName: "Prit jaishwal",
    },

  ]

  return (
    <>
      <div className="main_chat_container">
        <div className="chat_sidebar">
          <div className="name_profil_pic_name_btn_container">
            <h6>Lama chat</h6>
            <div className="profil_pic_name_btn_container">
              <img alt="pic" src={profile_pic} />
              <h6>Rekha Reddy</h6>
              <button>Logout</button>
            </div>

          </div>
          <div className="user_txt_input">
            <input
              type="text"
              className="user_txt"
              placeholder="find user"
            />
            <br />
          </div>
          <div className="data_of_user">
            {allChatUser.map((perChat) => {
              return (
                <div className="user_name_photo_container" key={Math.random()}>
                  <img alt="pic" src={profile_pic} />
                  <h6>{perChat.userName}</h6>
                </div>
              )
            })}
          </div>


        </div>
        <div className="chat_rightbar">
          <div className="name_profil_pic_name_btn_container ">
            Chatting
          </div>
          <div className="user_chat_board_container">
            {/* chat left side section */}
            <div className="user_chat_with_image_container">
              <div className="user_chat_text_container">
                <img alt="pic" src={profile_pic} />
                <p className="user_chat_left">hello how are you ??</p>
              </div>
              <img alt="pic" src={post_pic} />
            </div>

            {/* chat right side section */}


            <div className="user_chat_with_image_container_reverse">
              <div className="user_chat_text_container_reverse">
                <img alt="pic" src={profile_pic} />
                <p className="user_chat_left_reverse">hello how are you ??</p>
              </div>
              <img alt="pic" src={post_pic} />
            </div>


          </div>
          <div className="attach_send_btn_container">
            <input type="text" placeholder="type here" name="text" />
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file" className=""><MdAttachFile /></label>


            <button>SEND</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
