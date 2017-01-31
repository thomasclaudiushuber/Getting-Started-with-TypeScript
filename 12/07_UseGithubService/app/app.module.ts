import { GithubService } from './github.service';
import { FriendComponent } from './friend.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, FriendComponent],
  bootstrap: [AppComponent],
  providers: [GithubService]
})
export class AppModule { }
