'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Layers, Image as ImageIcon } from 'lucide-react';

export default function ProjectHeroCarousel({ images = [], title = 'Project' }) {
  const [index, setIndex] = useState(0);
  const items = images.map((image, i) => typeof image === 'string'
    ? { url: image, label: i === 0 ? 'Project preview' : 'Project detail' }
    : image
  ).filter((image) => image?.url);
  if (items.length === 0) return null;

  const current = items[index % items.length];
  const change = (step) => setIndex((value) => (value + step + items.length) % items.length);

  return (
    <section aria-label={title + ' project gallery'} className="relative isolate flex h-[55vh] min-h-[340px] w-full items-center justify-center overflow-hidden border-b border-hairline bg-secondary-ground/60 sm:h-[70vh] lg:h-[76vh]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,88,168,.08),transparent_70%)]"/>
      <div className="relative h-full w-full max-w-7xl p-5 pb-16 pt-20 sm:p-10 sm:pt-20">
        <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-hairline bg-ground/80 shadow-lg">
          <Image key={current.url} src={current.url} alt={title + ' — ' + (current.label || 'project screenshot')} fill priority sizes="(max-width:768px) 100vw, 90vw" className="object-contain"/>
        </div>
      </div>

      {items.length > 1 && <>
        <div className="absolute inset-x-4 top-4 z-10 mx-auto flex max-w-3xl gap-2 overflow-x-auto rounded-2xl border border-hairline bg-ground/90 p-2 shadow-sm backdrop-blur sm:inset-x-auto sm:right-8">
          {items.map((item,i)=>(
            <button key={item.url + i} type="button" onClick={()=>setIndex(i)} aria-pressed={index===i} className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition ${i===index?'bg-ink text-ground':'text-secondary-ink hover:bg-secondary-ground'}`}>
              {i===0?<ImageIcon size={15}/>:<Layers size={15}/>}<span className="max-w-32 truncate">{item.label || 'Screenshot ' + (i+1)}</span>
            </button>
          ))}
        </div>
        <button type="button" onClick={()=>change(-1)} aria-label="Previous screenshot" className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-ground/95 shadow-md transition hover:bg-white sm:left-7"><ChevronLeft size={22}/></button>
        <button type="button" onClick={()=>change(1)} aria-label="Next screenshot" className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-ground/95 shadow-md transition hover:bg-white sm:right-7"><ChevronRight size={22}/></button>
        <p className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-hairline bg-ground/90 px-4 py-2 text-xs font-semibold text-secondary-ink">{index+1} / {items.length}</p>
      </>}
    </section>
  );
}
