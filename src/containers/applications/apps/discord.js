import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Icon, Image, ToolBar, LazyComponent} from '../../../utils/general';

import WidgetBot from '@widgetbot/react-embed';

export const DScord = ()=>{
  const apps = useSelector(state => state.apps);
  const wnapp = useSelector(state => state.apps.discord);
  const [url, setUrl] = useState(null);
  const dispatch = useDispatch();
  const servers = [
    

  useEffect(()=>{
    if(url==null){
      setUrl("")
      // s
    }
  })

  return (
    <div className="discordWn floatTab dpShad"
      data-size={wnapp.size} data-max={wnapp.max} style={{
        ...(wnapp.size=="cstm"?wnapp.dim:null),
        zIndex: wnapp.z
      }} data-hide={wnapp.hide} id={wnapp.icon+"App"}>
      <ToolBar app={wnapp.action} icon={wnapp.icon} size={wnapp.size}
        name="Discord" bg="#282a2f" invert/>
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="restWindow flex-grow flex">
          <div className="dsbar w-18">
            <div className="servCont noscroll">
              <Icon className="dsIcon" src="./img/asset/discord.png" ext width={26}
                    click="EXTERNAL" payload=""/>
              <hr/>
              <Icon className="wnServer svIcon" src="./img/asset/server.gif" width={48}
                click="EXTERNAL" payload="" ext/>
              {servers.map((server,i)=>(
                <Icon key={i} className="svIcon" src={"./img/asset/"+server.src}
                  click="EXTERNAL" payload={server.link} ext width={48}/>
              ))}
            </div>
            <div className="joincont">
              <a href="" target="_blank" rel="noreferrer">
                Join
              </a>
            </div>
          </div>
          <div className="flex-grow overflow-hidden">
            <LazyComponent show={!wnapp.hide}>
              <WidgetBot
                className="w-full h-full"
                shard={url || ""}
              />
            </LazyComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
