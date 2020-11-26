/*!
 * @scf/selection-rules v0.2.3
 * (c) bjzhoutao
 */
/// <reference types="react" />
import { ForwardRefExoticComponent, RefAttributes, ReactElement } from 'react';

interface ParentAuditGroup {
    auditGroupId?: string;
    level?: number;
    popErp?: string;
}
interface AuditGroup {
    auditGroupId?: string;
    auditGroupName?: string;
    erps?: string[];
    level?: number;
}
interface BaseInfo {
    /**
     * 角色：1, "营销"、3, "采销"、4, "商家"、5, "商家运营"
     */
    roleType?: number;
    /**
     * 场景
     */
    scene?: string;
    /**
     * 场次
     */
    sessions?: string[];
    /**
     * 商家
     */
    venderId?: string;
    /**
     * 审核组
     */
    auditGroupInfo?: {
        parentAuditGroups?: ParentAuditGroup[];
        targetAuditGroups?: AuditGroup[];
        userAuditGroup?: AuditGroup;
    };
}
interface RuleParams {
    /**
     * 选品类型(1: sku, 2: spu, 3: 商家)
     */
    dimType: number;
    /**
     * 规则类型(1：卡控规则 2：推荐规则)
     */
    ruleType: number;
    /**
     * 规则内容(json字符串数组)
     */
    rules: string[];
}

interface SelectionRulesProps extends IProps, BaseInfo {
    /**
     * 规则类型(1：卡控规则 2：推荐规则)
     */
    ruleType: number;
    /**
     * 主题(1：蓝色，2：红色)
     */
    theme: number;
    /**
     * 是否禁用查看结果按钮
     */
    viewResultDisabled?: boolean;
    /**
     * 是否禁用添加规则按钮
     */
    addRuleDisabled?: boolean;
    /**
     * 数据初始化完成
     */
    onLoad?(ruleParams: RuleParams): void;
    /**
     * 选品类型切换触发回调
     */
    onDimTypeChange?(dimType: string): void;
    /**
     * 查看结果后触发回调
     */
    onViewResult?(ruleParams: RuleParams): void;
    /**
     * 保存规则后触发回调
     */
    onRuleSave?(ruleParams: RuleParams): void;
    /**
     * 保存规则前触发回调
     */
    onBeforeRuleSave?(ruleParams: RuleParams): Promise<any>;
    /**
     * 是否使用预发环境接口
     */
    __usePre?: boolean;
}
interface SelectionRulesRef {
    getRuleParams: () => RuleParams;
}
declare const SelectionRules: ForwardRefExoticComponent<SelectionRulesProps & RefAttributes<SelectionRulesRef>>;

/** 所有以React实现内部逻辑的web component的父类 */
declare abstract class ReactBaseElement extends HTMLElement {
    static observedAttributes: string[];
    /** 已经插入dom树 */
    connected: boolean;
    /** 当前正在渲染中 */
    rendering: boolean;
    styleContent: string;
    data: any;
    /** 必须被子类实现 */
    abstract render: () => ReactElement<any>;
    constructor();
    /** 依赖于调用方的virtual dom层是否使用setAttribute来设置节点值
     * 经过测试react与vue应该都是这么做的
     * 🔑 这里是普通dom节点是否可以接受复杂对象的关键环节
     * */
    setAttribute(name: string, value: any): void;
    /** 在删除属性的时候，也需要重新render
     * 这个是经过了一阵子开发之后才发现的问题
     * 赶紧补上
     * */
    removeAttribute(name: string): void;
    /** 同样拦截getAttribute，如果返回在this.data中存放的attribute */
    getAttribute(name: string): any;
    /** 插入dom节点时使用react render */
    connectedCallback(): void;
    /** 移除dom节点的时候必须unmount，否则内存泄漏 */
    disconnectedCallback(): void;
    /** 在connectedCallback之前也可能会有attribute change
     * 在render之后，才需要调用render
     * */
    attributeChangedCallback(): void;
    $update(): void;
    /** 生成shadowRoot节点，并插入样式，在constructor中首先执行 */
    protected insertStyle: (styleContent: string) => void;
}

declare class WcSelectionRules extends ReactBaseElement {
    data: SelectionRulesProps;
    private emotionCache;
    getRuleParams: () => RuleParams;
    constructor();
    render: () => JSX.Element;
    static get observedAttributes(): string[];
}

export default SelectionRules;
export { SelectionRulesProps, SelectionRulesRef, WcSelectionRules };
