/*
* Tencent is pleased to support the open source community by making
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
*
* Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
*
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
*
* License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
*
* ---------------------------------------------------
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
* documentation files (the "Software"), to deal in the Software without restriction, including without limitation
* the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
* to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of
* the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
* THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
* CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
* IN THE SOFTWARE.
*/

import { defineAsyncComponent, defineComponent } from 'vue';

import DemoBox from '../../components/demo-box';
import DemoTitle from '../../components/demo-title';
import PropsBox from '../../components/props-box';
import i18n from '../../language/i18n';
import { IPropsTableItem } from '../../typings';
import { getCookie } from '../utils/cookie';

const lang = getCookie('lang');

const BaseDemo = defineAsyncComponent(() => import(`./demo/${lang}/base-demo.vue`));

const { t } = i18n.global;

const menuProps: IPropsTableItem[] = [
  {
    name: 'width',
    type: 'String',
    default: '1em',
    desc: t('svg元素的宽度'),
    optional: [],
  },
  {
    name: 'height',
    type: 'String',
    default: [],
    desc: t('svg元素的高度'),
    optional: [],
  },
  {
    name: 'fill',
    type: 'String',
    default: 'currentColor',
    desc: t('svg元素的填充颜色'),
    optional: [],
  },
];

export default defineComponent({
  render() {
    return (
      <div>
        <DemoTitle
          name="Icon"
          desc={ t('Icon组件， 可以通过组件的使用方式按需加载。') }
        />
        <DemoBox
          title={ t('Icon展示') }
          subtitle={ t('这里展示了我们UI所用到的所有Icon, 点击复制使用') }
          desc={ t('点击复制使用Icon组件') }
          componentName="icon"
          demoName={`demo/${lang}/base-demo`}>
             <BaseDemo/>
          </DemoBox>
        <PropsBox propsData={menuProps}/>
      </div>
    );
  },
});
