<template>
  <div class="contacts">
    <!-- Заголовок страницы -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-header__title">Контакты</h1>
        <p class="page-header__subtitle">
          Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на ваши вопросы!
        </p>
      </div>
    </section>

    <!-- Основная секция: информация + форма -->
    <section class="contacts-main section">
      <div class="container">
        <div class="contacts-grid">
          <!-- Левая колонка: информация -->
          <div class="contacts-info">
            <h2 class="contacts-info__title">Как нас найти</h2>

            <div class="info-cards">
              <div class="info-card">
                <div class="info-card__icon">📍</div>
                <div class="info-card__content">
                  <h4 class="info-card__label">Адрес</h4>
                  <p class="info-card__value">г. Новочеркасск, ул. Спортивная, 17</p>
                  <p class="info-card__hint">Крытый манеж "Green Club"</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card__icon">📞</div>
                <div class="info-card__content">
                  <h4 class="info-card__label">Телефон</h4>
                  <a href="tel:+78885553535" class="info-card__value info-card__value--link">
                    +7 (888) 555-35-35
                  </a>
                  <p class="info-card__hint">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card__icon">✉️</div>
                <div class="info-card__content">
                  <h4 class="info-card__label">Email</h4>
                  <a href="mailto:info@greenclub.ru" class="info-card__value info-card__value--link">
                    info@greenclub.ru
                  </a>
                  <p class="info-card__hint">Ответим в течение 24 часов</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-card__icon">💬</div>
                <div class="info-card__content">
                  <h4 class="info-card__label">Мессенджеры</h4>
                  <div class="info-card__socials">
                    <a href="#" class="social-link" aria-label="Telegram">Telegram</a>
                    <a href="#" class="social-link" aria-label="WhatsApp">WhatsApp</a>
                    <a href="#" class="social-link" aria-label="VK">VK</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Часы работы -->
            <div class="working-hours">
              <h3 class="working-hours__title">🕐 Часы работы</h3>
              <div class="working-hours__grid">
                <div class="working-hours__row">
                  <span>Понедельник – Пятница</span>
                  <span class="working-hours__time">9:00 – 21:00</span>
                </div>
                <div class="working-hours__row">
                  <span>Суббота</span>
                  <span class="working-hours__time">10:00 – 18:00</span>
                </div>
                <div class="working-hours__row">
                  <span>Воскресенье</span>
                  <span class="working-hours__time">Выходной</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Правая колонка: форма -->
          <div class="contacts-form-wrapper">
            <h2 class="contacts-form-wrapper__title">Напишите нам</h2>
            <p class="contacts-form-wrapper__subtitle">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>

            <!-- Сообщение об успешной отправке -->
            <div v-if="isSubmitted" class="success-message">
              <div class="success-message__icon">✅</div>
              <h3 class="success-message__title">Сообщение отправлено!</h3>
              <p class="success-message__text">
                Спасибо за обращение! Мы свяжемся с вами в течение 24 часов.
              </p>
              <button class="btn btn--secondary" @click="resetForm">
                Отправить ещё одно сообщение
              </button>
            </div>

            <!-- Форма -->
            <form v-else class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name" class="form-label">Ваше имя *</label>
                <input 
                  id="name"
                  v-model="form.name" 
                  type="text" 
                  class="form-input"
                  :class="{ 'form-input--error': errors.name }"
                  placeholder="Иван Иванов"
                  required
                />
                <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone" class="form-label">Телефон *</label>
                  <input 
                    id="phone"
                    v-model="form.phone" 
                    type="tel" 
                    class="form-input"
                    :class="{ 'form-input--error': errors.phone }"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                  <span v-if="errors.phone" class="form-error">{{ errors.phone }}</span>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    id="email"
                    v-model="form.email" 
                    type="email" 
                    class="form-input"
                    :class="{ 'form-input--error': errors.email }"
                    placeholder="ivan@example.com"
                  />
                  <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">Тема обращения *</label>
                <select 
                  id="subject"
                  v-model="form.subject" 
                  class="form-input form-select"
                  :class="{ 'form-input--error': errors.subject }"
                  required
                >
                  <option value="" disabled>Выберите тему</option>
                  <option value="trial">Запись на пробную тренировку</option>
                  <option value="academy">Вопрос по детской академии</option>
                  <option value="schedule">Вопрос по расписанию</option>
                  <option value="coaches">Выбор тренера</option>
                  <option value="partnership">Сотрудничество</option>
                  <option value="other">Другое</option>
                </select>
                <span v-if="errors.subject" class="form-error">{{ errors.subject }}</span>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Сообщение *</label>
                <textarea 
                  id="message"
                  v-model="form.message" 
                  class="form-input form-textarea"
                  :class="{ 'form-input--error': errors.message }"
                  placeholder="Расскажите, чем мы можем помочь..."
                  rows="5"
                  required
                ></textarea>
                <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
              </div>

              <div class="form-group form-group--checkbox">
                <label class="checkbox-label">
                  <input 
                    v-model="form.agree" 
                    type="checkbox" 
                    class="checkbox-input"
                    required
                  />
                  <span class="checkbox-text">
                    Я согласен(а) на обработку персональных данных
                  </span>
                </label>
              </div>

              <button type="submit" class="btn btn--primary btn--full">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq section">
      <div class="container">
        <h2 class="section__title">Частые вопросы</h2>
        <div class="faq__list">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index" 
            class="faq-item"
            :class="{ 'faq-item--open': openFaq === index }"
          >
            <button class="faq-item__question" @click="toggleFaq(index)">
              <span>{{ item.question }}</span>
              <span class="faq-item__arrow">▼</span>
            </button>
            <div class="faq-item__answer" v-show="openFaq === index">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Форма
interface FormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
  agree: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  subject?: string
  message?: string
}

const form = reactive<FormData>({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
  agree: false
})

const errors = reactive<FormErrors>({})
const isSubmitted = ref(false)

// Валидация
function validateForm(): boolean {
  // Очищаем ошибки
  Object.keys(errors).forEach(key => {
    delete errors[key as keyof FormErrors]
  })

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Введите ваше имя'
    isValid = false
  }

  if (!form.phone.trim()) {
    errors.phone = 'Введите номер телефона'
    isValid = false
  } else if (form.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Введите корректный номер телефона'
    isValid = false
  }

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Введите корректный email'
    isValid = false
  }

  if (!form.subject) {
    errors.subject = 'Выберите тему обращения'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Введите сообщение'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Сообщение слишком короткое'
    isValid = false
  }

  return isValid
}

// Отправка формы
function submitForm() {
  if (validateForm()) {
    // Здесь в реальном проекте был бы запрос на сервер
    console.log('Форма отправлена:', { ...form })
    isSubmitted.value = true
  }
}

// Сброс формы
function resetForm() {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  form.agree = false
  isSubmitted.value = false
}

// FAQ
const openFaq = ref<number | null>(null)

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}

const faqItems = [
  {
    question: 'С какого возраста можно записать ребёнка?',
    answer: 'Мы принимаем детей от 5 лет. Для самых маленьких (5-7 лет) разработана специальная игровая программа, которая знакомит с основами гольфа в увлекательной форме.'
  },
  {
    question: 'Нужно ли покупать своё оборудование?',
    answer: 'Нет! На начальном этапе мы предоставляем весь необходимый инвентарь: клюшки, мячи, перчатки. Своё оборудование понадобится только при переходе в спортивную группу.'
  },
  {
    question: 'Сколько стоит пробная тренировка?',
    answer: 'Первая тренировка — бесплатная! На ней тренер оценит уровень подготовки, расскажет о программе и поможет выбрать подходящую группу.'
  },
  {
    question: 'Что делать, если ребёнок пропустил занятие?',
    answer: 'Мы понимаем, что дети болеют и уезжают. Пропущенное занятие можно отработать в другой группе того же уровня в течение месяца. Просто предупредите администратора.'
  },
  {
    question: 'Проводятся ли тренировки зимой?',
    answer: 'Да! С ноября по март занятия проходят в крытом манеже с симуляторами и тренировочными зонами. С апреля по октябрь — на открытом поле "Зелёная долина".'
  }
]
</script>

<style scoped lang="scss">
.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  
  &__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  &__subtitle {
    font-size: 1.25rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto;
  }
}

.section__title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

// Основная сетка
.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

// Контактная информация
.contacts-info {
  &__title {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.info-card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background-color: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  &__icon {
    font-size: 1.75rem;
    flex-shrink: 0;
  }
  
  &__label {
    font-size: 0.85rem;
    color: var(--text-color);
    opacity: 0.6;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.25rem;
  }
  
  &__value {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0.25rem;
    
    &--link {
      color: var(--primary-color);
      transition: opacity 0.2s;
      
      &:hover {
        opacity: 0.7;
      }
    }
  }
  
  &__hint {
    font-size: 0.85rem;
    color: var(--text-color);
    opacity: 0.6;
  }
  
  &__socials {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.25rem;
  }
}

.social-link {
  padding: 0.4rem 0.85rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background-color 0.2s, transform 0.2s;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
}

// Часы работы
.working-hours {
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  
  &__title {
    font-size: 1.125rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  &__grid {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border-color);
    font-size: 0.95rem;
    color: var(--text-color);
    
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  
  &__time {
    font-weight: 600;
    color: var(--primary-color);
  }
}

// Форма
.contacts-form-wrapper {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  
  &__title {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }
  
  &__subtitle {
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 1.5rem;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  
  &--checkbox {
    flex-direction: row;
    align-items: center;
  }
}

.form-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
}

.form-input {
  padding: 0.875rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: border-color 0.2s, box-shadow 0.2s;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(58, 125, 68, 0.15);
  }
  
  &--error {
    border-color: #dc3545;
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.15);
    }
  }
  
  &::placeholder {
    color: var(--text-color);
    opacity: 0.4;
  }
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-error {
  font-size: 0.8rem;
  color: #dc3545;
  font-weight: 500;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.checkbox-input {
  width: 18px;
  height: 18px;
  accent-color: var(--primary-color);
  cursor: pointer;
}

.checkbox-text {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
}

// Сообщение об успехе
.success-message {
  text-align: center;
  padding: 2rem 1rem;
  
  &__icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  
  &__title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--text-color);
  }
  
  &__text {
    color: var(--text-color);
    opacity: 0.8;
    margin-bottom: 1.5rem;
  }
}

// FAQ
.faq {
  background-color: var(--card-bg);
  
  &__list {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
}

.faq-item {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  
  &--open {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    
    .faq-item__arrow {
      transform: rotate(180deg);
    }
  }
  
  &__question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-color);
    text-align: left;
    cursor: pointer;
    transition: color 0.2s;
    
    &:hover {
      color: var(--primary-color);
    }
  }
  
  &__arrow {
    font-size: 0.75rem;
    transition: transform 0.3s;
    color: var(--primary-color);
    flex-shrink: 0;
    margin-left: 1rem;
  }
  
  &__answer {
    padding: 0 1.5rem 1.25rem;
    color: var(--text-color);
    opacity: 0.85;
    line-height: 1.7;
  }
}

// Кнопки
.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  border: 2px solid transparent;
  font-size: 1rem;
  
  &--primary {
    background-color: var(--primary-color);
    color: white;
    
    &:hover {
      background-color: var(--primary-dark);
    }
  }
  
  &--secondary {
    background-color: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
  
  &--full {
    width: 100%;
  }
}

// Адаптивность
@media (max-width: 900px) {
  .contacts-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 0;
    
    &__title {
      font-size: 2rem;
    }
    
    &__subtitle {
      font-size: 1.125rem;
    }
  }
  
  .section__title {
    font-size: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contacts-form-wrapper {
    padding: 1.5rem;
  }
  
  .info-card {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>