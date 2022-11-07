import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { CurrentlyPopular } from '../shared/interfaces/currently-popular';
import { NoticesCarousel } from '../shared/interfaces/notices-carousel';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public noticesCarousel: NoticesCarousel[] = [];
  public sectionCurrentlyPopular: CurrentlyPopular[] = [];
  public config: SwiperOptions = {
    autoplay: {
      delay: 3000,
    },
    loop: true,
  };

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getNoticesCarousel();
    this.getCurretlyPopular();
  }

  public scrollDown(): void {
    window.scrollTo(0, 700);
  }

  private getNoticesCarousel(): void {
    this.homeService.getNoticesCarousel().subscribe({
      next: (noticesCarousel) => {
        this.noticesCarousel = noticesCarousel;
      },
    });
  }

  private getCurretlyPopular(): void {
    this.homeService.getCurrentlyPopular().subscribe({
      next: (currentlyPopular) => {
        this.sectionCurrentlyPopular = currentlyPopular;
      },
    });
  }
}
