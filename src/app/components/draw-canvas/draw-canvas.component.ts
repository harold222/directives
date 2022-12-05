import { Component, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-draw-canvas',
  templateUrl: './draw-canvas.component.html',
  styles: [
    ` .media-player {
    background-color: var(--color-5);
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 2;
    height: 85px;
    border-top: solid 1px var(--color-2);
    box-shadow: 0px -15px 15px 7px #0000002e;
}

.media-player .media-player--wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 0;
}

.media-player .media-player--wrapper .player-center {
    display: flex;
    align-content: center;
    align-items: center;
}

.media-player--wrapper .artist {
    width: 25%;
    padding: 0 .5rem;
}

.media-player--wrapper .player-audio {
    width: 25%;
    padding: 0 .5rem;
}

.media-player--wrapper .player-controls {
    width: 50%;
    padding: 0 .5rem;
    position: relative;
}

.media-player--wrapper .artist .artist-inside {
    display: flex;
    gap: .5rem
}

.media-player--wrapper .artist .track-like {
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 0 .25rem;
}

.media-player--wrapper .artist .track-like .btn-like {
    border: 0;
    background-color: transparent;
    color: var(--color-4);
    font-size: var(--font-size-2);
    opacity: .7;
}

.media-player--wrapper .artist .artist-inside .track-info {
    display: flex;
    flex-direction: column;
    align-self: center;
}

.media-player--wrapper .artist .artist-inside .track-title {
    margin: 0;
    font-weight: 400;
    font-size: .8rem;
}

.media-player--wrapper .artist .artist-inside .sub-title {
    margin: 0;
    font-weight: 300;
    font-size: 80%;
    opacity: .6;
}

.media-player--wrapper .artist .artist-inside .cover {
    width: 55px;
    height: 55px;
    object-fit: cover;
}

.media-player--wrapper .player-controls-inside {
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    width: 100%;
    position: relative;
}

.media-player--wrapper .player-controls-inside .buttons-media {
    display: flex;
    justify-content: center;
    align-self: center;
    gap: .5rem
}

.media-player--wrapper .player-controls-inside .buttons-media .btn {
    background-color: transparent;
    border: 0;
    color: var(--color-4);
    opacity: .7;
    font-size: 1.65rem
}

.media-player--wrapper .player-controls-inside .buttons-media .play {
    font-size: 2.35rem;
}

.media-player--wrapper .player-controls-inside .media-linetime {
    display: flex;
    justify-content: space-between;
    font-size: 70%;
    padding: 0;
}

.media-player--wrapper .player-controls-inside .media-linetime .time {
    padding: .5rem 0;
}

.media-player--wrapper .player-controls-inside .media-linetime .time-progress {
    background-color: var(--color-2);
    height: 2px;
    width: 100%;
    left: 0;
    position: absolute;
    cursor: pointer;
}

.media-player--wrapper .player-controls-inside .media-linetime .time-progress-live {
    background-color: var(--color-4);
    width: 0%;
    height: 2px;
    transition: all ease var(--animation-1);
    position: absolute;
}

.media-player--wrapper .player-audio-inside {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.media-player--wrapper .player-audio-inside .btn-media {
    background-color: transparent;
    border: 0;
    color: var(--color-4);
    font-size: var(--font-size-2);
}`
  ]
})
export class DrawCanvasComponent {
  @ViewChild('player') player!: ElementRef;

  constructor(private render2: Renderer2) {
  }

  @HostListener('document:keydown', ['$event'])
  handleKey($event: KeyboardEvent): void {
    this.movePlayer($event.key);
  }

  @HostListener('document:click', ['$event.target'])
  handleClick($event: HTMLElement): void {
    console.log('Click', $event.classList.toString())
    const nameClass = $event.classList.toString()
  }

  private movePlayer(nameKey: string): void {
    console.log(this.player)
    const playerEl = this.player.nativeElement;

    if (nameKey === 'ArrowRight') {
      const { left = '0px' } = playerEl.style; //TODO: 10px --> 10 --> Number(10)
      const parseValue = Number(left.replace('px', '')) //TODO: 0
      this.render2.setStyle(playerEl, 'left', `${parseValue + 50}px`) //TODO: 50px
    }

    if (nameKey === 'ArrowLeft') {
      const { left = '0px' } = playerEl.style;
      const parseValue = Number(left.replace('px', ''))
      this.render2.setStyle(playerEl, 'left', `${parseValue - 50}px`)
    }

    if (nameKey === 'ArrowUp') {

      this.render2.addClass(playerEl, 'jump-player')

      setTimeout(() => {
        this.render2.removeClass(playerEl, 'jump-player')
      }, 2000)
    }
  }

}
