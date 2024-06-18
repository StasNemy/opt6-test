<script setup lang="ts">
import { object, string } from "yup";
import Input from "./shared/Input.vue";
import Button from "./shared/Button.vue";
import { VueFinalModal, useModal, useModalSlot } from "vue-final-modal";
import ModalDialog from "./ModalDialog.vue";

const initialError = {
  carNumber: "",
  region: "",
  certificate: "",
};
type TInitialError = typeof initialError;

const form = reactive({ ...initialError });

const formError = reactive({ ...initialError });

const resetErrors = () => {
  Object.assign(formError, initialError);
};
const resetForm = () => {
  Object.assign(form, initialError);
};

const schema = object<TInitialError>().shape({
  carNumber: string().required("Необходимо ввести номер автомобиля"),
  certificate: string().required(
    "Необходимо ввести свидетельство о регистрации ТС"
  ),
  region: string().required("Необходимо ввести регион"),
});

type TError = {
  inner: Array<{ path: keyof TInitialError; message: string }>;
};

async function onSubmit() {
  resetErrors();
  const valid = await schema
    .validate(form, { abortEarly: false })
    .then((res) => res)
    .catch((error: TError) => {
      error.inner?.forEach(({ path, message }) => {
        formError[path] = message;
      });
    });
  if (valid) {
    alert(`Ваши данные были отправлены
${valid.carNumber}, ${valid.region}, ${valid.certificate}`);
    resetForm();
  }
}

const { open, close } = useModal({
  component: VueFinalModal,
  attrs: {
    class: "flex items-center justify-center",
  },
  slots: {
    default: useModalSlot({
      component: ModalDialog,
      attrs: {
        id: "tgbNymZ7vqY",
      },
    }),
  },
});
</script>

<template>
  <section
    class="container pt-10 sm:pt-20 flex flex-col-reverse lg:flex-row-reverse gap-10"
  >
    <NuxtImg
      class="w-full sm:w-1/2 mx-auto lg:w-3/4 h-fit"
      src="/images/image 2.png"
    />
    <div class="w-auto">
      <h1 class="mb-6">Проверьте штрафы и зарегистрируйтесь в 1 клик</h1>
      <form
        class="w-auto max-w-max sm:w-3/4 lg:w-auto flex flex-col gap-4"
        @submit.prevent="onSubmit"
      >
        <div class="flex gap-4 md:gap-[30px] flex-wrap md:flex-nowrap">
          <div class="flex-1">
            <Input
              :error="formError.carNumber"
              v-model="form.carNumber"
              id="carNumber"
              type="text"
              label="Номер автомобиля"
            />
          </div>
          <div class="w-full md:w-auto">
            <Input
              :error="formError.region"
              v-model="form.region"
              id="region"
              type="text"
              label="Регион"
            />
          </div>
        </div>
        <div>
          <Input
            :error="formError.certificate"
            v-model="form.certificate"
            id="certificate"
            type="text"
            label="Свидетельство о регистрации ТС"
          />
        </div>
        <div class="flex gap-4 sm:gap-[21px] flex-wrap">
          <Button variant="primary" type="submit">
            <template #after>
              <NuxtImg
                class="mt-1"
                width="14"
                height="14"
                src="/icons/Логистика-2.svg"
              />
            </template>
            Проверить штрафы
          </Button>
          <Button variant="outline" :onClick="open">
            <template #before>
              <NuxtImg width="32" height="23" src="/icons/youtube.svg" />
            </template>
            О сервисе
            <span class="text-primary-cobalt text-caption-2">
              (1 мин. 20 сек)
            </span>
          </Button>
        </div>
        <p class="text-caption text-gray-600">
          Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
          персональных данных и принимаете оферту
        </p>
      </form>
    </div>
  </section>
</template>
