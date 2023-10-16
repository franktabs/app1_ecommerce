import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app-old/app-old.component';
import { CardPhotoComponent } from './shared/components/card-photo/card-photo.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({

            declarations: [AppComponent, CardPhotoComponent],
        });
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    // it(`should have as title 'angularApp1'`, () => {
    //     expect(app.title).toEqual('angularApp1');
    // });

    // it('should render title', () => {
    //     fixture.detectChanges();
    //     const compiled = fixture.nativeElement as HTMLElement;
    //     expect(compiled.querySelector('.content span')?.textContent).toContain('angularApp1 app is running!');
    // });
});
