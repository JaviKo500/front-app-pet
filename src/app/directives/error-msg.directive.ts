import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective {

  private _message: string = 'Required field';
  public htlmElement!: ElementRef<HTMLElement>;
  constructor(
    private __elem: ElementRef<HTMLElement>
  ) {
    this.htlmElement = __elem;
  }

  @Input() public set valid(isValid: boolean) {    
    isValid ? 
    this.htlmElement.nativeElement.classList.add('hidden')
    :
    this.htlmElement.nativeElement.classList.remove('hidden');

  }
  @Input() public set message(msg: string){
    this._message = msg;
    this.setMessage();
  }
  ngOnInit(): void {
    this.setMessage();
  }

  setMessage = () => this.htlmElement.nativeElement.textContent = this._message;

}
