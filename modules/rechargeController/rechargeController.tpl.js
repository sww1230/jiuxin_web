/**
 * Created by jinguangguo on 2015/6/24.
 */

var html = {
	container: [
		'<div id="rechargePageModule" class="recharge_page_module">',
		
		'</div>'
	].join(''),
	content: [
		'<div class="box">',
			'<h2>充 值</h2>',
			'<% if (userInfo.isBorrower === false) { %>',
				'<a href="#account/fundsRecord/record=recharge" class="recharge_record">充值记录</a>',
			'<% } else { %>',
				'<div class="tab clearfix">',
					'<% if (rechargeType === "PERSON") { %>',
						'<div class="tab_item tab_item_active" data-type="PERSON">个人充值</div>',
						'<div class="tab_item" data-type="ENTERPRISE">企业充值</div>',
					'<% } else { %>',
						'<div class="tab_item" data-type="PERSON">个人充值</div>',
						'<div class="tab_item tab_item_active" data-type="ENTERPRISE">企业充值</div>',
					'<% } %>',
				'</div>',
			'<% } %>',
			'<form id="rechargeForm" name="rechargeForm" action="trade/prepareRecharge" method="post" target="_blank">',
				'<div class="operate clearfix">',
					'<div class="remain">',
						'<span class="label">可用余额：</span>',
						'<span class="price"><%- userInfo.remain %>元</span>',
					'</div>',
					'<div class="recharge">',
						'<label>充值金额：</label>',
						'<input id="rechargeValue" class="recharge_money" name="amount" type="text" placeholder="请输入您的充值金额"/>',
						'<span class="unit">元</span>',
						'<div class="recharge_money_tip">',
						'</div>',
					'</div>',
				'</div>',
				'<div class="bank_online fn_mt30">',
					'<p class="label">网上银行：</p>',
					'<ul id="bankList" class="bank_list clearfix">',
						'<% $.each(bankList, function(index, item) { %>',
							'<li class="item item_<%- item.shortName %>" data-shortname="<%- item.shortName %>">',
								'<a href="javascript:void(0);" class="item_link"><%- item.bankName %></a>',
								'<% if (rechargeType === "ENTERPRISE") { %>',
								'<em class="icon_enterprise">企业版</em>',
								'<% } %>',
								'<em class="icon_active"></em>',
							'</li>',
						'<% }); %>',
						'<!--',
						'<li class="item item_ABC" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">中国农业银行</a>',
						'</li>',
						'<li class="item item_BOC" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">中国银行</a>',
						'</li>',
						'<li class="item item_BCCB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">北京银行</a>',
						'</li>',
						'<li class="item item_COMM" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">交通银行</a>',
						'</li>',
						'<li class="item item_CCB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">建设银行</a>',
						'</li>',
						'<li class="item item_CIB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">兴业银行</a>',
						'</li>',
						'<li class="item item_CMB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">招商银行</a>',
						'</li>',
						'<li class="item item_CEB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">光大银行</a>',
						'</li>',
						'<li class="item item_CMBC" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">民生银行</a>',
						'</li>',
						'<li class="item item_CITIC" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">中信银行</a>',
						'</li>',
						'<li class="item item_GDB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">广发银行</a>',
						'</li>',
						'<li class="item item_HXB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">华夏银行</a>',
						'</li>',
						'<li class="item item_HKBEA" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">东亚银行</a>',
						'</li>',
						'<li class="item item_PSBC" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">邮政储蓄银行</a>',
						'</li>',
						'<li class="item item_SPDB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">浦发银行</a>',
						'</li>',
						'<li class="item item_SHRCB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">上海农村商业银行</a>',
						'</li>',
						'<li class="item item_WZCB" data-bankName="">',
							'<a href="javascript:void(0);" class="item_link">温州银行</a>',
						'</li>',
						'-->',
					'</ul>',
				'</div>',
				'<!-- 充值限额-->',
				'<div class="recharge_limit fn_mt30">',
					'<p class="label">充值限额：</p>',
					'<div class="limit_detail">',
						'<table></table>',
					'</div>',
				'</div>',
				'<!-- submit-->',
				'<div class="recharge_btn fn_mt30">',
					'<!-- 银行代号 -->',
					'<input id="bankCode" type="hidden" name="bankCode" value="">',
					'<button id="toRecharge" class="btn_submit btn_blue">充&nbsp;&nbsp;&nbsp;&nbsp;值</button>',
				'</div>',
				'<!-- remanding -->',
				'<div class="recharge_remanding">',
					'<p>注意事项：</p>',
					'<ul class="remand_list">',
						'<li class="item">1.请注意您的浏览器对各银行网银的拦截，建议使用IE浏览器进行充值。</li>',
						'<li class="item">2.请确认您的银行卡已开通网上银行功能。同时注意支付限额，以免造成不便。</li>',
						'<li class="item">3.如果充值金额没有及时到账，请联系客服，400-100-0099</li>',
					'</ul>',
				'</div>',
			'</form>',
		'</div>'
	].join(''),

	// 支付成功的提示
	tip: [
		'<div class="box">',
		    '<div class="recharge_tip">',
		        '<div class="title">',
					'<% if (tipInfo.isSuccess === true) { %>',
		            	'<em class="icon icon_success"></em>',
		            	'<span class="title_text">充值成功，开始理财吧！</span>',
					'<% } else { %>',
						'<em class="icon icon_fail"></em>',
						'<span class="title_text">请求充值失败，请重试</span>',
					'<% } %>',
		        '</div>',
		        '<div class="content">',
					'<% if (tipInfo.isSuccess === true) { %>',
						'<div class="detail">',
							'<p class="time">',
								'<label for="">充值时间：</label>',
								'<span class="time_format"><%- tipInfo.completeTime %></span>',
							'</p>',
							'<p class="money">',
								'<label for="">充值金额：￥</label>',
								'<span class="money_format"><%- tipInfo.amount %></span>',
							'</p>',
							'<p class="remain">',
								'<label for="">账户余额：￥</label>',
								'<span class=""><%- tipInfo.balance %></span>',
							'</p>',
						'</div>',
						'<div class="tip_operate fn_mt30">',
							'<p class="recharge_more">',
								'<a href="javascript:window.location.reload();" class="recharge_more_btn btn_blue">继续充值</a>',
							'</p>',
							'<p class="recharge_return">',
								'<a href="#account/accountPandect" class="recharge_return_btn">返回我的账户</a>',
							'</p>',
							// '<p class="recharge_record">',
							// 	'<a href="##account/fundsRecord/record=recharge" class="recharge_recor_view">查看充值记录</a>',
							// '</p>',
						'</div>',
					'<% } else { %>',
						'<div class="tip_operate fn_mt30">',
							'<p class="recharge_more">',
								'<a href="javascript:window.location.reload();" class="recharge_more_btn btn_blue">返回重试</a>',
							'</p>',
						'</div>',
					'<% } %>',
		        '</div>',
		    '</div>',
		'</div>'
	].join('')
};

module.exports = html;