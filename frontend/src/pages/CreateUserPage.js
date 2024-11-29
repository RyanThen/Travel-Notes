function CreateUserPage() {
  return (
    <div>
      <form>
        <div class='fieldset'>
          <label for='text1'>Text</label>
          <input type='text' id='text1' placeholder='Field Text'/>
        </div>
        <div class='fieldset'>
          <label for='textarea1'>Textarea</label>
          <textarea id='textarea1' placeholder='Field Textarea'></textarea>
        </div>
        <div class='fieldset'>
          <label for='select1'>Select</label>
          <select id='select1' placeholder='Field Textarea'>
            <option value=''>Select</option>
            <option value='Select One'>Select One</option>
            <option value='Select Two'>Select Two</option>
            <option value='Select Three'>Select Three</option>
            <option value='Select Four'>Select Four</option>
          </select>
        </div>
        <div class='fieldset'>
          <div class='checkbox_block'>
            <input type='checkbox' id='checkbox1'/>
            <label for='checkbox1'>Checkbox 1</label>
          </div>
          <div class='checkbox_block'>
            <input type='checkbox' id='checkbox2'/>
            <label for='checkbox2'>Checkbox 2</label>
          </div>
        </div>
        <div class='fieldset'>
          <div class='radio_block'>
            <input type='radio' name='radio1' id='radio1'/>
            <label for='radio1'>Radio 1</label>
          </div>
          <div class='radio_block'>
            <input type='radio' name='radio1' id='radio2'/>
            <label for='radio2'>Radio 2</label>
          </div>
        </div>
        <div class='fieldset'>
          <button type='submit'>Submit Form</button>
        </div>
      </form>
      <form>
        <div class='fieldset is-invalid'>
          <label for='text2'>Text (invalid)</label>
          <input type='text' id='text2' placeholder='Field Text'/>
          <div class='message-invalid'>Bitte geben Sie einen Text ein</div>
        </div>
        <div class='fieldset is-invalid'>
          <label for='textarea2'>Textarea (invalid)</label>
          <textarea id='textarea2' placeholder='Field Textarea'></textarea>
          <div class='message-invalid'>Details about what is invalid.</div>
        </div>
        <div class='fieldset error'>
          <label for='select1'>Select (invalid)</label>
          <select id='select1' placeholder='Field Textarea'>
            <option value=''>Choose</option>
            <option value='Choose'>Choose</option>
            <option value='Choose'>Choose</option>
            <option value='Choose'>Choose</option>
            <option value='Choose'>Choose</option>
          </select>
          <div class='message-error'>Details about what is invalid.</div>
        </div>
      </form>
      <div class='message message--success'>Success message</div>
      <div class='message message--warning'>Warning message</div>
    </div>
  )
}

export default CreateUserPage;