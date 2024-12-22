import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentGenerationComponent } from './tournament-generation.component';

describe('TournamentGenerationComponent', () => {
  let component: TournamentGenerationComponent;
  let fixture: ComponentFixture<TournamentGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
