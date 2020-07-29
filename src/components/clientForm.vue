<template>
  <div class="container">
    <transition name="fade">
      <div class="notification" v-if="notification">
        <p>Клиент успешно создан</p>
        <div class="icon" @click="notification=false">&#9747;</div>
      </div>
    </transition>
    <div class="card">
      <form class="form" @submit.prevent="submit">
        <!-- Атрибуты формы: -->
        <h2>Личные данные:</h2>
        <div class="form__label">
          <input type="text" placeholder="Фамилия*" v-model="surname" v-type />

          <p
            :class="{form__checkOff: true, form__checkOn: ($v.surname.$dirty & !$v.surname.required)}"
          >Поле обязательно для заполнения</p>
        </div>
        <div class="form__label">
          <input type="text" placeholder="Имя*" v-model="name" v-type />

          <p
            :class="{form__checkOff: true, form__checkOn: ($v.name.$dirty & !$v.name.required)}"
          >Поле обязательно для заполнения</p>
        </div>
        <div class="form__label">
          <input type="text" placeholder="Отчество" v-type v-model="patronymic" />
        </div>
        <div class="form__label">
          <input type="date" placeholder="Дата рождения*" v-model="date" />

          <p
            :class="{form__checkOff: true, form__checkOn: ($v.date.$dirty & !$v.date.required)}"
          >Поле обязательно для заполнения</p>
        </div>
        <div class="form__label">
          <input
            type="phone"
            placeholder="Ваш номер телефона"
            v-model="phone"
            maxlength="16"
            v-mask
          />
          <p
            :class="{form__checkOff: true, form__checkOn: ($v.phone.$dirty & !$v.phone.minLength)}"
          >Номер не кооректный</p>
        </div>
        <div class="form__label">
          <select v-model="male">
            <option disabled value>Укажите пол</option>
            <option>Мужской</option>
            <option>Женский</option>
          </select>
        </div>
        <div class="form__label">
          <select v-model="doc">
            <option disabled value>Лечащий врач</option>
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышева</option>
          </select>
        </div>
        <div class="form__label">
          <p class="title">Группа клиентов*</p>
          <select
            class="selectMulti"
            :class="{invalid: ($v.group.$dirty & !$v.group.required)}"
            v-model="group"
            multiple
          >
            <option>VIP</option>
            <option>Проблемные</option>
            <option>ОМС</option>
          </select>
          <p
            :class="{form__checkOff: true, form__checkOn: ($v.group.$dirty & !$v.group.required)}"
          >Поле обязательно для заполнения</p>
        </div>
        <div class="form__label flex">
          <input type="checkbox" id="checkbox" v-model="sms" />
          <label for="checkbox">
            <p class="title">{{sms?" Вам будут направляться смс":" Вам не будут направляться смс"}}</p>
          </label>
        </div>

        <!-- Адрес: -->
        <h2>Адрес:</h2>
        <div class="adress">
          <div v-for="(item,i) in test" :key="i+2">
            <div class="form__label">
              <input
                type="text"
                :placeholder="item.placeholder"
                v-type="item.type"
                v-model="item.index"
              />
            </div>
          </div>

          <div class="form__label">
            <input type="text" v-type placeholder="Город*" v-model="city" />

            <p
              :class="{form__checkOff: true, form__checkOn: ($v.city.$dirty & !$v.city.required)}"
            >Поле обязательно для заполнения</p>
          </div>
        </div>

        <!-- Документы -->
        <h2>Документы:</h2>
        <div class="document">
          <div class="form__label">
            <select v-model="document">
              <option disabled value>Тип документа*</option>
              <option>Паспорт</option>
              <option>Свидетельство о рождении</option>
              <option>Вод. удостоверение</option>
            </select>
            <p
              :class="{form__checkOff: true, form__checkOn: ($v.document.$dirty & !$v.document.required)}"
            >Поле обязательно для заполнения</p>
          </div>
          <div class="form__label">
            <input type="date" placeholder="Дата выдачи*" v-model="document_date" />

            <p
              :class="{form__checkOff: true, form__checkOn: ($v.document_date.$dirty & !$v.document_date.required)}"
            >Поле обязательно для заполнения</p>
          </div>

          <div v-for="item in documentArr" :key="item.model">
            <div class="form__label">
              <input
                type="text"
                :placeholder="item.placeholder"
                v-type="item.type"
                v-model="item.index"
              />
            </div>
          </div>
        </div>
        <button type="submit">ОТПРАВИТЬ</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      notification: false,
      name: "",
      surname: "",
      patronymic: "",
      date: "",
      phone: "",
      male: "",
      group: [],
      doc: "",
      sms: false,
      index: "",
      country: "",
      area: "",
      city: "",
      street: "",
      home: "",
      document: "",
      document_series: "",
      document_number: "",
      document_organization: "",
      document_date: "",
      test: [
        {
          model: this.index,
          placeholder: "Индекс",
          type: "number",
        },
        {
          model: this.country,
          placeholder: "Страна",
          type: "string",
        },
        {
          model: this.area,
          placeholder: "Область",
          type: "string",
        },
        {
          model: this.street,
          placeholder: "Улица",
          type: "string",
        },
        {
          model: this.home,
          placeholder: "Дом",
          type: "number",
        },
      ],
      documentArr: [
        {
          model: this.document_series,
          placeholder: "Серия",
          type: "number",
        },
        {
          model: this.document_number,
          placeholder: "Номер",
          type: "number",
        },
        {
          model: this.document_organization,
          placeholder: "Кем выдан",
          type: "string",
        },
      ],
    };
  },
  validations: {
    name: {
      required,
    },
    surname: {
      required,
    },
    date: {
      required,
    },
    group: {
      required,
    },
    city: {
      required,
    },
    document: {
      required,
    },
    document_date: {
      required,
    },
    phone: {
      minLength: minLength(16),
    },
  },
  methods: {
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.notificationOpen();
    },
    notificationOpen() {
      this.notification = true;
      setTimeout(() => {
        this.notification = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
h2 {
  margin: 15px 0 !important;
  color: white;
  text-align: right;
}
.notification {
  position: fixed;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 40px;
  background-color: #323232;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    font-weight: bold;
    font-size: 18px !important;
    cursor: pointer;
  }
}
.flex {
  display: flex !important;
  align-items: center;
}
.title {
  color: rgb(231, 227, 227);
  font-size: 14px;
  margin-left: 15px !important;
}
.container {
  width: 100%;
  padding: 1rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121212;
  .card {
    width: 100%;
    max-width: 600px;
    padding: 1rem !important;
    background: #1e1e1e;
    border-radius: 30px;
    .form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      &__label {
        height: auto;
        min-height: 60px !important;
      }
      &__checkOff {
        margin-top: 5px;
        font-size: 12px;
        color: red;
        opacity: 0;
        font-family: "Playfair Display", serif;
      }
      &__checkOn {
        opacity: 1 !important;
      }
    }
  }
  input,
  select {
    width: 100%;
    height: 30px;
    border: none !important;
    border-bottom: 1px rgb(231, 227, 227) solid !important;
    padding-left: 15px !important;
    background: #1e1e1e;
    font-size: 14px;
    color: rgb(231, 227, 227);
    &::placeholder {
      color: rgb(231, 227, 227);
    }
    &:focus {
      outline: none;
    }
  }
  option {
    color: black;
    background: white !important;
    border: none !important;
    &:disabled {
      display: none !important;
    }
  }
  .selectMulti {
    margin-top: 10px !important;
    padding: 0px !important;
    height: 70px !important;
    option {
      background: white !important;
      height: 25px !important;
      padding-left: 15px !important;
    }
  }
  input[type="checkbox"] {
    margin-left: 15px !important;
    width: 20px !important;
  }
  button {
    width: 250px;
    padding: 5px !important;
    border-radius: 20px;
    border: none !important;
    margin: 0 auto !important;
    transition: 0.5s;
    background-color: #272727;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    color: rgb(231, 227, 227);
    font-size: 0.875rem;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: #363636;
    }
  }
}
</style>
