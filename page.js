function page(dqPage) {
		// var dqPage = res.currentPage;//得到当前页数
		dqPage = parseInt(dqPage);//得到的文本转成int
		var pageCount = ${fundnav.data.totalPage};//得到总页数
		pageCount = parseInt(pageCount);
		var i = 1;
		i = parseInt(i);
		var item="<span>共"+pageCount+"页</span>";
		if (pageCount==1){
			item+="<a href='javascript:;' class='p_btn l'  onclick='nextPage(${p-1},${fundnav.data.totalPage});'>&nbsp;</a><a href='javascript:;' class='on''>"+i+"</a><a href='javascript:;' class='p_btn r' onclick='nextPage(${p+1},${fundnav.data.totalPage});' >&nbsp;</a>";
			$('#page').html(item);
			return;
		}
		if (pageCount <= 5 ) {//总页数小于五页，则加载所有页
			for (i; i <= pageCount; i++) {
				//前一页li显示
				if(i==1){
					if(dqPage==i){
						item+="<a href='javascript:;' class='p_btn l'  onclick='nextPage(${p-1},${fundnav.data.totalPage});'>&nbsp;</a><a href='javascript:;' class='on''>"+i+"</a>";
					}else{
						item+="<a href='javascript:;' class='p_btn l'  onclick='nextPage(${p-1},${fundnav.data.totalPage});'>&nbsp;</a><a href='javascript:;''>"+i+"</a>";
					}
				}
				//后一页li显示
				else if(i==pageCount){
					if(dqPage==i){
						item+="<a href='javascript:;' class='on''>"+i+"</a><a href='javascript:;' class='p_btn r' onclick='nextPage(${p+1},${fundnav.data.totalPage});' >&nbsp;</a>";
					}else{
						item+="<a href='javascript:;''>"+i+"</a><a href='javascript:;' class='p_btn r' onclick='nextPage(${p+1},${fundnav.data.totalPage});' >&nbsp;</a>";
					}
				}else{
					if (dqPage==i) {
						item+="<a href='javascript:;' class='on''>"+i+"</a>";
					}else{
						item+="<a href='javascript:;''>"+i+"</a>";
					}
				}
			};
			$('#page').html(item);
			return;
		}else if (pageCount > 5) {//总页数大于五页，则加载五页
			if (dqPage <= 3) {//当前页 小于等于3，加载1-5页
				for (i; i <= 5; i++) {
					//前一页显示
					if(i==1){
						if(dqPage==i){
							item+="<a href='javascript:;' class='p_btn l'  onclick='nextPage(${p-1},${fundnav.data.totalPage});'>&nbsp;</a><a href='javascript:;' class='on''>"+i+"</a>";
						}else{
							item+="<a href='javascript:;' class='p_btn l'  onclick='nextPage(${p-1},${fundnav.data.totalPage});'>&nbsp;</a><a href='javascript:;''>"+i+"</a>";
						}
					}else if(i==5){
						if(dqPage==i){
							item+="<a href='javascript:;' class='on''>"+i+"</a><a href='javascript:;' class='p_btn r' onclick='nextPage(${p+1},${fundnav.data.totalPage});' >&nbsp;</a>";
						}else{
							item+="<a href='javascript:;''>"+i+"</a><a href='javascript:;' class='p_btn r' onclick='nextPage(${p+1},${fundnav.data.totalPage});' >&nbsp;</a>";
						}
					}else{
						if (dqPage==i) {
							item+="<a href='javascript:;' class='on''>"+i+"</a>";
						}else{
							item+="<a href='javascript:;''>"+i+"</a>";
						}
					}
					//后一页li显示
				};
				$('#page').html(item);
				return;
			}else if (dqPage > 3) {//当前页大于3页
				//当前页>=总页码-2时 显示 最后5页
				if(dqPage>=pageCount-2){
					for(i=pageCount-4;i<=pageCount;i++){
						//前一页显示
						if(i==pageCount-4){
							if(dqPage==i){
								item+="<a href='javascript:;' class='p_btn l'  onclick='nextPage(${p-1},${fundnav.data.totalPage});'>&nbsp;</a><a href='javascript:;' class='on''>"+i+"</a>";
							}else{
								item+="<a href='javascript:;' class='p_btn l'  onclick='nextPage(${p-1},${fundnav.data.totalPage});'>&nbsp;</a><a href='javascript:;''>"+i+"</a>";
							}
						}else if(i==pageCount){
							if(dqPage==i){
								item+="<a href='javascript:;' class='on''>"+i+"</a><a href='javascript:;' class='p_btn r' onclick='nextPage(${p+1},${fundnav.data.totalPage});' >&nbsp;</a>";
							}else{
								item+="<a href='javascript:;''>"+i+"</a><a href='javascript:;' class='p_btn r' onclick='nextPage(${p+1},${fundnav.data.totalPage});' >&nbsp;</a>";
							}
						}else{
							if (dqPage==i) {
								item+="<a href='javascript:;' class='on''>"+i+"</a>";
							}else{
								item+="<a href='javascript:;''>"+i+"</a>";
							}
						}
					}
				}else{
					//大于3 总页码大于当前页的+2
					for(i=dqPage-2;i<=dqPage+2;i++){
						//前一页显示
						if(i==dqPage-2){
							if(dqPage==i){
								item+="<a href='javascript:;' class='p_btn l'  onclick='nextPage(${p-1},${fundnav.data.totalPage});'>&nbsp;</a><a href='javascript:;' class='on''>"+i+"</a>";
							}else{
								item+="<a href='javascript:;' class='p_btn l'  onclick='nextPage(${p-1},${fundnav.data.totalPage});'>&nbsp;</a><a href='javascript:;''>"+i+"</a>";
							}
						}else if(i==dqPage+2){
							if(dqPage==i){
								item+="<a href='javascript:;' class='on''>"+i+"</a><a href='javascript:;' class='p_btn r' onclick='nextPage(${p+1},${fundnav.data.totalPage});' >&nbsp;</a>";
							}else{
								item+="<a href='javascript:;''>"+i+"</a><a href='javascript:;' class='p_btn r' onclick='nextPage(${p+1},${fundnav.data.totalPage});' >&nbsp;</a>";
							}
						}else{
							if (dqPage==i) {
								item+="<a href='javascript:;' class='on''>"+i+"</a>";
							}else{
								item+="<a href='javascript:;''>"+i+"</a>";
							}
						}
					}
				}
				$('#page').html(item);
				return;
			}
		}
	}