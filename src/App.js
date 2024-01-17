import { useEffect } from 'react';
import './App.css';

import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

function App() {
  useEffect(() => {
    let tabs = gsap.utils.toArray('.tabs_tab')
    tabs.forEach((el, i) => {
      el.addEventListener('click', function () {
        const state = Flip.getState(".tabs_tab, .tabs_heading, .tabs_num, .tabs_right", {
          props: "fontSize,padding",
          simple: true,
        });

        Flip.from(state, {
          duration: 0,
          nested: true,
          absolute: true,
          ease: "power1.inOut",
          onComplete: () => {
            tabs.forEach((e, i) => {
              e.classList.add('closed')
            })
            el.classList.remove('closed')
          }
        })
      })
    })
  }, [])

  return (
    <>
      <div className="page-wrapper">
        <main className="main-wrapper">
          <div className="tabs">
            <div className="tabs_tab">
              <div className="tabs_top">
                <div className="tabs_left">
                  <p className="tabs_num">001</p>
                </div>
                <div className="tabs_right">
                  <div className="tabs_video w-background-video w-background-video-atom">
                    <video
                      id="631d0f0b-47d8-eb78-5fb7-738fe7a23957-video"
                      style={{ backgroundImage: 'url(&quot;https://assets.website-files.com/631e2ee7574f9c06eea4b3be/631e3409700e2c0060d53478_Pexels Videos 2082026-poster-00001.jpg&quot;)' }}
                      muted playsInline autoPlay loop>
                      <source
                        src="https://assets.website-files.com/631e2ee7574f9c06eea4b3be/631e3409700e2c0060d53478_Pexels Videos 2082026-transcode.mp4"
                      />
                      <source
                        src="https://assets.website-files.com/631e2ee7574f9c06eea4b3be/631e3409700e2c0060d53478_Pexels Videos 2082026-transcode.webm"
                      />
                    </video>
                  </div>
                </div>
              </div>
              <p className="tabs_heading">Travel</p>
            </div>
            <div data-color="red" className="tabs_tab closed">
              <div className="tabs_top">
                <div className="tabs_left">
                  <p className="tabs_num">002</p>
                </div>
                <div className="tabs_right">
                  <div className="tabs_video w-background-video w-background-video-atom">
                    <video
                      id="551c89b4-dacb-c5b5-c703-2c20c8412d59-video"
                      style={{ backgroundImage: 'url(&quot;https://assets.website-files.com/631e2ee7574f9c06eea4b3be/631e881092aded1d1f43c04f_Pexels Videos 2427912-poster-00001.jpg&quot;)' }}
                      muted playsInline autoPlay loop>
                      <source
                        src="https://assets.website-files.com/631e2ee7574f9c06eea4b3be/631e881092aded1d1f43c04f_Pexels Videos 2427912-transcode.mp4"
                      />
                      <source
                        src="https://assets.website-files.com/631e2ee7574f9c06eea4b3be/631e881092aded1d1f43c04f_Pexels Videos 2427912-transcode.webm"
                      />
                    </video>
                  </div>
                </div>
              </div>
              <p className="tabs_heading is-2">beach</p>
            </div>
            <div data-color="purple" className="tabs_tab closed">
              <div className="tabs_top">
                <div className="tabs_left">
                  <p className="tabs_num">003</p>
                </div>
                <div className="tabs_right">
                  <div className="tabs_video w-background-video w-background-video-atom">
                    <video
                      id="bed0a838-a3b0-4dc9-c2eb-082c8e64985f-video"
                      style={{ backgroundImage: 'url(&quot;https://assets.website-files.com/631e2ee7574f9c06eea4b3be/631e87fd60e214345e4b7e4e_Pexels Videos 2527423-poster-00001.jpg&quot;)' }}
                      muted playsInline autoPlay loop>
                      <source
                        src="https://assets.website-files.com/631e2ee7574f9c06eea4b3be/631e87fd60e214345e4b7e4e_Pexels Videos 2527423-transcode.mp4"
                      />
                      <source
                        src="https://assets.website-files.com/631e2ee7574f9c06eea4b3be/631e87fd60e214345e4b7e4e_Pexels Videos 2527423-transcode.webm"
                      />
                    </video>
                  </div>
                </div>
              </div>
              <p className="tabs_heading is-3">nature</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
