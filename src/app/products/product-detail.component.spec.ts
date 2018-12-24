import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces';
import { StarComponent } from 'src/app/shared/star.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports:[RouterTestingModule,HttpClientModule],
      declarations: [ ProductDetailComponent, ConvertToSpacesPipe, StarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
