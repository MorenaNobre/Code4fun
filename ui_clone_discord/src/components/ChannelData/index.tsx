import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(10).keys()).map((n) =>(
                    <ChannelMessage
                    key={n}
                    author="Morena Nobre"
                    date="28/06/2020"
                    content="Hoje é domingão e eu estou desenvolvendo a UI do Discord. Pura diversão!"
                />
                ))}
                
                <ChannelMessage
                    author="Droid BB-8"
                    date="28/06/2020"
                    content={
                        <>
                            <Mention>@Morena Nobre</Mention>, beep beep boop buzz beep zaz buzz boopy-de-doo!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;