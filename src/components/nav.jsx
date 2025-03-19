import React from 'react'

export default function Nav({isOpen}) {
  return (
    <>
    <div className={isOpen ? "navigation" : "closed"}>
    <div className="buttons">
      <button>
        <img src="./assets/images/7.png" alt="" />
      </button>
      <button>
        <img src="./assets/images/8.png" alt="" />
      </button>
      <button>
        <img src="./assets/images/9.png" alt="" />
      </button>
      <button>
        <img src="./assets/images/10.png" alt="" />
      </button>
      <button>
        <img src="./assets/images/11.png" alt="" />
      </button>
      <button>
        <img src="./assets/images/12.png" alt="" />
      </button>
    </div>
    <div className="avatars">
      <img src="./assets/images/Avatar Image.png" alt="" />
      <img src="./assets/images/Avatar Image (1).png" alt="" />
      <img src="./assets/images/Avatar Image (3).png" alt="" />
      <img src="./assets/images/Avatar Image (2).png" alt="" />
      <button>
        <img src="./assets/images/13.png" alt="" />
      </button>
    </div>
  </div>
  </>
  )
}
