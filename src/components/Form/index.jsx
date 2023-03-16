import style from './Form.module.css'

export default function Form () {
  return (
    <>
      <form autoComplete='off'>

        <div className={style.tabsContainerMenu}>
          <div class={style.tabsContainerItems}>
            <ul>
              <li className={style.active}>Contenido</li>
              <li>Imágenes</li>
              <li>SEO</li>
            </ul>
          </div>

          <div className={style.tabsContainerButtons}>
            <div className={style.createButton}>
              <svg viewBox='0 0 24 24'>
                <path d='M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z' />
              </svg>
            </div>
            <div className={style.storeButton}>
              <label>
                <input type='submit' value='' />
                <svg viewBox='0 0 24 24'>
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path class='crud__create-button-icon' d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z' />
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div className={style.errorsContainer} />

        <div className={style.tabsContainerContent}>
          <div className={`${style.tabPanel} ${style.active}`}>
            <div className={style.row}>
              <div className={style.formElement}>
                <div className={style.formElementLabel}>
                  <label for='name'>Nombre</label>
                </div>
                <div className={style.formElementInput}>
                  <input type='text' name='name' id='name' />
                </div>
              </div>
              <div className={style.formElement}>
                <div className={style.formElementLabel}>
                  <label for='age'>Edad</label>
                </div>
                <div className={style.formElementInput}>
                  <div className={style.checkboxContainer}>
                    <label>20</label>
                    <input type='checkbox' name='age' id='age' value='20' />
                    <label>25</label>
                    <input type='checkbox' name='age' id='age' value='25' />
                    <label>30</label>
                    <input type='checkbox' name='age' id='age' value='30' />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.formElement}>
                <div className={style.formElementLabel}>
                  <label for='price'>Precio</label>
                </div>
                <div className={style.formElementInput}>
                  <input type='number' name='price' id='price' />
                </div>
              </div>
              <div className={style.formElement}>
                <div className={style.formElementLabel}>
                  <label for='gender'>Género</label>
                </div>
                <div className={style.formElementInput}>
                  <div className={style.radioContainer}>
                    <label>H</label>
                    <input type='radio' name='gender' id='gender' value='H' />
                    <label>M</label>
                    <input type='radio' name='gender' id='gender' value='M' />
                    <label>?</label>
                    <input type='radio' name='gender' id='gender' value='?' />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.formElement}>
                <div className={style.formElementLabel}>
                  <label for='password'>Contraseña</label>
                </div>
                <div className={style.formElementInput}>
                  <input type='password' name='password' id='password' />
                </div>
              </div>
              <div className={style.formElement}>
                <div className={style.formElementLabel}>
                  <label for='salary'>Salario</label>
                </div>
                <div className={style.formElementInput}>
                  <div className={style.rangeContainer}>
                    <span className={style.rangeValue}>0</span>
                    <input type='range' name='salary' id='salary' value='0' />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.formElement}>
                <div className={style.formElementLabel}>
                  <label for='date'>Fecha</label>
                </div>
                <div className={style.formElementInput}>
                  <input type='date' name='date' id='date' />
                </div>
              </div>
              <div className={style.formElement}>
                <div className={style.formElementLabel}>
                  <label for='time'>Hora</label>
                </div>
                <div className={style.formElementInput}>
                  <input type='time' name='time' id='time' />
                </div>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.formElement}>
                <div className={style.formElementLabel}>
                  <label for='message'>Mensaje</label>
                </div>
                <div className={style.formElementInput}>
                  <textarea name='message' id='message' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
