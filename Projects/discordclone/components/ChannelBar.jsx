"use client"
import React from 'react'
import { useState } from 'react'
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import { BsHash } from 'react-icons/bs';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];


const ChannelBar = () => {
    return (
        <div className='channel-bar shadow-lg '>
            <ChannelBlock />
            <div className='channel-container'>
                <Dropdown header='Topics' selections={topics} />
                <Dropdown header='Questions' selections={questions} />
                <Dropdown header='Random' selections={random} />
            </div>
        </div>
    );
};

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className='dropdown'>
            <div onClick={() => setExpanded(!expanded)} className='drop-down-header'>
                <ChevronIcon expanded={expanded} />
                <h5 className={expanded ? 'drop-header-text-selected' : 'drop-header-text'}>
                    {header}
                </h5>
                <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
            </div>
            {expanded && selections && selections.map((selection) => <TopicSelection selection={selection} />)}
        </div>
    )
}

const TopicSelection = ({ selection }) => {
    return (
        <div className='dropdown-selection'>
            <BsHash size='24' className='text-gray-400' />
            <h5 className='dropdown-selection-text'>{selection}</h5>
        </div>
    )
}


const ChannelBlock = () => {
    return (
        <div className='channel-block'>
            <h5 className='channel-block-text'>Channels</h5>
        </div>
    )
}


const ChevronIcon = ({ expanded }) => {
    const chevclass = 'text-accent text-opacity-80 my-auto mr-1';
    return expanded ?
        (<FaChevronDown size='14' className={chevclass} />)
        : (<FaChevronRight size='14' className={chevclass} />);
};

export default ChannelBar