import {surpriseMePrompts} from '../constants';
import FileSaver from 'file-saver'


export function getRandomPrompt(propmt) {
    const randomIndexx = Math.floor(Math.random() * surpriseMePrompts.length);
    const randmPrompt = surpriseMePrompts[randomIndexx];

    if(randmPrompt === propmt) return getRandomPrompt(propmt)

    return randmPrompt;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}